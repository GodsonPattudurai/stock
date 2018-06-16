package com.fastfresh.in.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fastfresh.in.model.User;
import com.fastfresh.in.service.UserService;

@RestController
public class StockController {

	@Autowired
	UserService userService;
	
	@RequestMapping("/users")  
    public List<User> userList(){  
        return userService.findAll();  
    } 
}
