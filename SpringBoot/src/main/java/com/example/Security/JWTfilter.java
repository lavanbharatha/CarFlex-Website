package com.example.Security;

import io.jsonwebtoken.ExpiredJwtException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Set;

@Component
public class JWTfilter extends OncePerRequestFilter {
    private static final Logger logger = LoggerFactory.getLogger(JWTfilter.class);
    private static final String AUTH_HEADER = "Authorization";
    private static final String BEARER_PREFIX = "Bearer ";

    @Autowired
    private Details userDetailsService;

    @Autowired
    private JWTService jwtService;

    private static final Set<String> PUBLIC_ENDPOINTS = Set.of(
            "/api/cars/verifyUser",
            "/api/cars/addUser",
            "/api/cars/getAll",
            "/error"
    );

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {

        if (isPublicEndpoint(request)) {
            filterChain.doFilter(request, response);
            return;
        }

        final String authHeader = request.getHeader(AUTH_HEADER);

        if (authHeader == null || !authHeader.startsWith(BEARER_PREFIX)) {
            sendError(response, HttpServletResponse.SC_UNAUTHORIZED, "Missing or invalid Authorization header");
            return;
        }

        try {
            String jwtToken = authHeader.substring(BEARER_PREFIX.length()).trim();

            if (jwtToken.isEmpty()) {
                sendError(response, HttpServletResponse.SC_UNAUTHORIZED, "Empty JWT token");
                return;
            }

            String username = jwtService.extractUsername(jwtToken);

            if (username == null) {
                sendError(response, HttpServletResponse.SC_UNAUTHORIZED, "Invalid token structure");
                return;
            }

            if (!jwtService.isTokenValid(jwtToken, username)) {
                if (jwtService.isTokenExpired(jwtToken)) {
                    sendError(response, HttpServletResponse.SC_UNAUTHORIZED, "Token expired");
                } else {
                    sendError(response, HttpServletResponse.SC_UNAUTHORIZED, "Invalid token");
                }
                return;
            }

            setAuthenticationInContext(request, username);
            filterChain.doFilter(request, response);

        } catch (ExpiredJwtException ex) {
            sendError(response, HttpServletResponse.SC_UNAUTHORIZED, "Token expired");
        } catch (UsernameNotFoundException ex) {
            sendError(response, HttpServletResponse.SC_UNAUTHORIZED, "User not found");
        } catch (Exception ex) {
            logger.error("JWT processing error", ex);
            sendError(response, HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Authentication failed");
        }
    }

    private boolean isPublicEndpoint(HttpServletRequest request) {
        String path = request.getServletPath();
        return PUBLIC_ENDPOINTS.contains(path) || path.matches("/api/cars/\\d+");
    }

    private void setAuthenticationInContext(HttpServletRequest request, String username) {
        if (SecurityContextHolder.getContext().getAuthentication() == null) {
            UserDetails userDetails = userDetailsService.loadUserByUsername(username);
            
            if (userDetails == null) {
                throw new UsernameNotFoundException("User not found with username: " + username);
            }

            UsernamePasswordAuthenticationToken authentication =
                    new UsernamePasswordAuthenticationToken(
                            userDetails, 
                            null, 
                            userDetails.getAuthorities());

            authentication.setDetails(
                    new WebAuthenticationDetailsSource().buildDetails(request));
            SecurityContextHolder.getContext().setAuthentication(authentication);
        }
    }

    private void sendError(HttpServletResponse response, int status, String message) 
            throws IOException {
        response.setStatus(status);
        response.setContentType("application/json");
        response.getWriter().write(String.format(
            "{\"error\":\"%s\",\"status\":%d}", 
            message, 
            status));
    }
}