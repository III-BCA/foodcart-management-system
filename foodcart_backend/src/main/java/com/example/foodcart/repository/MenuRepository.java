package com.example.foodcart.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.foodcart.model.Menu;

public interface MenuRepository extends JpaRepository<Menu, Long> {
}
