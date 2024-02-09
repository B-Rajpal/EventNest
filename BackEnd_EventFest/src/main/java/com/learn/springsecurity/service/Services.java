package com.learn.springsecurity.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.learn.springsecurity.model.Booking;
import com.learn.springsecurity.model.Events;
import com.learn.springsecurity.model.Users;
import com.learn.springsecurity.repository.BookingRepo;
import com.learn.springsecurity.repository.EventRepo;
import com.learn.springsecurity.repository.UsersRepository;

@Service
public class Services {
    @Autowired
    BookingRepo brepo;
    @Autowired
    EventRepo erepo;
    @Autowired
    UsersRepository urepo;
    public String addEvent(Events e){
        erepo.save(e);
        return "Event added Successfully";
    }
    public String updateEvent(Events e){
        erepo.save(e);
        return "event updated succesfully";
    }
    public String deleteEvent(int id){
        erepo.deleteById(id);
        return "deleted Successfully";

    }
    public List<Events> showevents(){
        return erepo.findAll();
    }
    //Booking
    public String addBooking(Booking e){
        brepo.save(e);
        return "Booking added Successfully";
    }
    public String updateBooking(Booking e){
        brepo.save(e);
        return "Booking updated succesfully";
    }
    public String deleteBooking(int id){
        brepo.deleteById(id);
        return "deleted Successfully";

    }
    public List<Booking> showBooking(){
        return brepo.findAll();
    }
    public Optional<Booking> showBookingByid(int id){
        return brepo.findById(id);
    }
    public Optional<Users> getProfile(String id){
        return urepo.findById(id);
    }

}
