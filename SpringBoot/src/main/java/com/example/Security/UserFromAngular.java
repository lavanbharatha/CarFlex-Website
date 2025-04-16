package com.example.Security;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UserFromAngular {

    @JsonProperty("username")
    private String userName;
    @JsonProperty("password")
    private String password;
    @JsonProperty("pNumber")
    private String phoneNumber;
    @JsonProperty("signGmail")
    private String email;

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

}
