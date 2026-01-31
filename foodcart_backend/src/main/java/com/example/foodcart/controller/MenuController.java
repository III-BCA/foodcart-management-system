package com.example.foodcart.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.example.foodcart.model.Menu;
import com.example.foodcart.repository.MenuRepository;

@RestController
@RequestMapping("/api/menu")
@CrossOrigin(origins = "https://foodcart-management-system.vercel.app/")
public class MenuController {

    private final MenuRepository repo;

    public MenuController(MenuRepository repo) {
        this.repo = repo;
    }

    // CREATE
    @PostMapping
    public Menu addMenu(@RequestBody Menu menu) {
        return repo.save(menu);
    }

    // READ
    @GetMapping
    public List<Menu> getAllMenu() {
        return repo.findAll();
    }

    // UPDATE
    @PutMapping("/{id}")
    public Menu updateMenu(@PathVariable Long id, @RequestBody Menu menu) {
        Menu existing = repo.findById(id).orElseThrow();
        existing.setItemName(menu.getItemName());
        existing.setPrice(menu.getPrice());
        existing.setCategory(menu.getCategory());
        return repo.save(existing);
    }

    // DELETE
    @DeleteMapping("/{id}")
    public void deleteMenu(@PathVariable Long id) {
        repo.deleteById(id);
    }
}
