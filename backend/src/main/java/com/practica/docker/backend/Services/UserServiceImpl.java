package com.practica.docker.backend.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.practica.docker.backend.entities.User;
import com.practica.docker.backend.repositories.UserRepository;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public List<User> getUsers() {
        return this.userRepository.findAll(); 
    }

    @Override
    public Optional<User> getUser(Long id) {
        return this.userRepository.findById(id);
    }

    @Override
    public User createUser(User user) {
        return this.userRepository.save(user);
    }

    @Override
    public User updateUser(User user) {
        return this.userRepository.save(user);
    }

    @Override
    public void deleteUser(Long id) {
        this.userRepository.deleteById(id);
    }

}
