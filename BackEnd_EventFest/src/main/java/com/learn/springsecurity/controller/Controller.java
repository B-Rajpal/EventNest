package com.learn.springsecurity.controller;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.learn.springsecurity.model.Booking;
import com.learn.springsecurity.model.Events;
// import com.learn.springsecurity.model.Users;
import com.learn.springsecurity.service.Services;


@RestController
public class Controller {
    @Autowired
    Services service;
    @GetMapping("/showEvents")
    public List<Events> showEvents(){
        return service.showevents();
    }
    @PostMapping("/addEvents")
    public String addEvents(@RequestBody Events e){
        return service.addEvent(e);
    }
    @PutMapping("/updateEvents")
    public String UpdateEvents(@RequestBody Events e){
        return service.updateEvent(e);
    }
    @DeleteMapping("/deleteEvents/{id}")
    public String deleteEvents(@PathVariable int id){
        return service.deleteEvent(id);
    }
    @GetMapping("/showBooking")
    public List<Booking> showBooking(){
        return service.showBooking();
    }
    @GetMapping("/showBookingById/{id}")
    public Optional<Booking> showBookingById(@PathVariable int id){
        return service.showBookingByid(id);
    }
    @PostMapping("/addBooking")
    public String addBooking(@RequestBody Booking e){
        return service.addBooking(e);
    }
    @PutMapping("/updateBooking")
    public String UpdateBooking(@RequestBody Booking e){
        return service.updateBooking(e);
    }
    @DeleteMapping("/deleteBooking/{id}")
    public String deleteBooking(@PathVariable int id){
        return service.deleteBooking(id);
    }
    // @GetMapping("/getProfile/{id}")
    // public Optional<Users> getProfile(String id){ 
    //     return service.getProfile(id);
    // }

}

