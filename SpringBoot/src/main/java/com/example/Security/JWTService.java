package com.example.Security;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Service;

import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.Date;
import java.util.function.Function;

@Service
public class JWTService {
    private static final long EXPIRATION_TIME_MS = 3600000; 
    private String secretKey = "";
    

    public JWTService() {
         KeyGenerator kg=KeyGenerator.getInstance("HmacSHA256");
             secretKey sk  =kg.generateKey();
               this.secretKey= Base64.getEncoder().encodeToString(sk.getEncoded());
    }
               

    public String generateToken(String username) {
        return Jwts.builder()
                .setSubject(username)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME_MS))
                .signWith(getKey())
                .compact();
    }

    public String extractUsername(String token) throws JwtException {
        return extractClaim(token, Claims::getSubject);
    }

    public boolean isTokenValid(String token, String username) {
        try {
            final String tokenUsername = extractUsername(token);
            return (tokenUsername.equals(username)) && !isTokenExpired(token);
        } catch (JwtException e) {
            return false;
        }
    }
   public String getKey(){
       bytes[] bytes= Decoders.BASE64.decode(secretKey);
         return Keys.hmacShaKeyFor(bytes);
    }

    public boolean isTokenExpired(String token) throws JwtException {
        return extractExpiration(token).before(new Date());
    }

    private Date extractExpiration(String token) throws JwtException {
        return extractClaim(token, Claims::getExpiration);
    }

    private <T> T extractClaim(String token, Function<Claims, T> claimsResolver) 
            throws JwtException {
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    private Claims extractAllClaims(String token) throws JwtException {
        return Jwts.parserBuilder()
                .setSigningKey(secretKey)
                .build()
                .parseClaimsJws(token)
                .getBody();
    }
}
