const { createGroup } = require('../Controllers/Groups/CreateGroup');
const { getGroupById, getGroupsByName, getGroupsByMember, getGroupsByAdmin, getGroupsByLocation, getGroupsByVisibility, getAllGroups, getGroupChat } = require('../Controllers/Groups/Get');
const { sendJoinRequest, processJoinRequest } = require('../Controllers/Groups/JoinGroup');
const { getOlderChat } = require('../Controllers/Messeging/Chat');

const GroupRouter = require('express').Router();

// Get a group by ID
GroupRouter.get('/group/id/:id', getGroupById);

// Get groups by name
GroupRouter.get('/group/name/:name', getGroupsByName);

// Get groups by member ID
GroupRouter.get('/group/member/:memberId', getGroupsByMember);

// Get groups by admin ID
GroupRouter.get('/group/admin/:adminId', getGroupsByAdmin);

// Get groups by location
GroupRouter.get('/group/location/:location', getGroupsByLocation);

// Get groups by visibility (public or private)
GroupRouter.get('/group/visibility/:public', getGroupsByVisibility);

// Get all groups
GroupRouter.get('/group', getAllGroups);

//Create a new group
GroupRouter.post('/group/create', createGroup);

//Join Request
GroupRouter.put('/group/join-request', sendJoinRequest);

//Process join request
GroupRouter.put('/group/join-request/process/', processJoinRequest);

//Get groups chat
GroupRouter.get('/group/chats/:groupId/:userId',getGroupChat);



module.exports = GroupRouter;

