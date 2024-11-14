package com.practica.docker.backend.Services;

import java.util.List;
import java.util.Optional;

import com.practica.docker.backend.entities.User;

public interface UserService {

    List<User> getUsers();

    Optional<User> getUser(Long id);

    User createUser(User user);

    User updateUser(User user);

    void deleteUser(Long id);
}
