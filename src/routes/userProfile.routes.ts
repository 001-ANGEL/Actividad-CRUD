import { Router } from "express";


const router = Router();

router.post("/api/user-profile");

router.get("/api/user-profile");

router.get("/api/user-profile/:id");

router.put("/api/user-profile/:id");

router.delete("/api/user-profile/:id");

export default router;
