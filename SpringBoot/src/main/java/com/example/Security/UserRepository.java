package com.example.Security;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<NewUser, Long> {


    NewUser save(UserFromAngular user);

    NewUser findByUserName(String userName);

}
