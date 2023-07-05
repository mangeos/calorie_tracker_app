package com.example.user_service.user_controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/userservice.example.com/users")
public class UserController {
    
    @GetMapping
    public String allUsers() {
        return "all js";
    }
}
