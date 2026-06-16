import { groupsController } from "./groups.controller.js";
import { Router } from "express";

const router =  Router();

router.get("/", groupsController.getAll);

router.get("/:groupId/permissions", groupsController.getPermissionsByGroupId);

export default router