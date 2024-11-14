package com.practica.docker.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.practica.docker.backend.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

}
