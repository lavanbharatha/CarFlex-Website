package com.example.controller;

import com.example.Security.*;
import com.example.service.UserService;

import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.JwtException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/cars")
public class UserController {
    @Autowired
    private UserService userService;

    @Autowired
    private BCryptPasswordEncoder bCrypt;

    @Autowired
    private JWTService jwtService;

    @PostMapping("/addUser")
    public ResponseEntity<String> addUser(@RequestBody UserFromAngular user) {
        user.setPassword(bCrypt.encode(user.getPassword()));
        userService.addUser(user);
        return ResponseEntity.ok("User added successfully");
    }

    @PostMapping("/verifyUser")
    public ResponseEntity<Map<String, String>> verify(@RequestBody Login user) {
        String token = userService.verify(user);
        if (token != null) {
            return ResponseEntity.ok(Map.of("token", token));
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                .body(Map.of("error", "Invalid credentials"));
    }

    @PostMapping("/validateToken")
    public ResponseEntity<Map<String, String>> validateJwtToken(
            @RequestHeader("Authorization") String authHeader) {
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(Map.of("error", "Invalid authorization header"));
        }
        
        String token = authHeader.substring(7);
        try {
            String username = jwtService.extractUsername(token);
            return ResponseEntity.ok(Map.of(
                "message", "Token is valid",
                "username", username
            ));
        } catch (ExpiredJwtException ex) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(Map.of("error", "Token expired"));
        } catch (JwtException ex) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(Map.of("error", "Invalid token"));
        }
    }
}
