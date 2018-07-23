package com.fastfresh.in.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fastfresh.in.model.User;
import com.fastfresh.in.service.UserService;

import io.swagger.annotations.Api;

@RestController
@Api(value="stock", description="Operations pertaining to stock")
public class StockController {

	@Autowired
	UserService userService;
	
	@RequestMapping(value = "/users", method = RequestMethod.GET)  
    public List<User> userList(){  
        return userService.findAll();  
    } 
}
