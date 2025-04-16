package com.example.Security;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class NewUser {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id;
private String userName;   
private String password;
private String phoneNumber;
private String email;

public String getPhoneNumber() {
    return phoneNumber;
}
public void setPhoneNumber(String phoneNumber) {
    this.phoneNumber = phoneNumber;
}
public String getEmail() {
    return email;
}
public void setEmail(String email) {
    this.email = email;
}
public Long getId() {
    return id;
}
public void setId(Long id) {
    this.id = id;
}
public String getUserName() {
    return userName;
}
public void setUserName(String userName) {
    this.userName = userName;
}
public String getPassword() {
    return password;
}
public void setPassword(String password) {
    this.password = password;
}

}
