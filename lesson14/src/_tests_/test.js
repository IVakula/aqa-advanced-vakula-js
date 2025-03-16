import { ObjectsAPI } from "../endpoints/ObjectsAPI.js";

const objAPI = new ObjectsAPI();


describe('ObjectAPI endpoints tests', () => {
    //get list of all Objects
    test('GET: List of all Objects with valid url', async () => {
        const resp = await objAPI.getListOfAllObjects();
        expect(resp.status).toBe(200);
        expect(resp.data).not.toBe(null);
    });

    // get list of all Objects by ids
    test('GET: List of all Objects by ids', async () => {
        const resp = await objAPI.getListOfObjectsByIDs([7, 2, 3]);
        expect(resp.status).toBe(200);
        expect(resp.data).not.toBe(null);
    });

    test('GET: List of all Objects with invalid id should be empty', async () => {
        const resp = await objAPI.getListOfObjectsByIDs([-22]);
        expect(resp.status).toBe(200);
        expect(resp.data).toEqual([]);
    });

    //get single Object by id
    test('GET: Single Object by id', async () => {
        const resp = await objAPI.getSingleObject("15");
        expect(resp.status).toBe(200);
        expect(resp.data.id).toEqual("15");
    });

    test('GET: Single Object with invalid id', async () => {
        let id = "-15";
        const resp = await objAPI.getSingleObject(id);
        expect(resp.status).toBe(404);
        expect(resp.data.error).toBe(`Oject with id=${id} was not found.`);
    });

    // add new object
    test('POST: add new object', async () => {
        const obj1 = {
            "name": "Apple MacBook Pro 16",
            "data": {
                "year": 2019,
                "price": 2000,
                "CPU model": "Intel Core i9",
                "Hard disk size": "1 TB"
            }
        };
        const resp = await objAPI.addObject(obj1);
        expect(resp.status).toBe(200);
        expect(resp.data.id).not.toBe(null);
        expect(resp.data.name).toEqual("Apple MacBook Pro 16");
    });

    test('POST: add new object with wrong structure', async () => {
        const obj1 = {
            "item": "Apple"
        };
        const resp = await objAPI.addObject(obj1);
        expect(resp.status).toBe(200);
        expect(resp.data.id).not.toBe(null);
        expect(resp.data.item).toBe(undefined);
    });

    //update object
    test('PUT: update object with new price = 3000', async () => {
        const obj1 = {
            "name": "Apple MacBook Pro 16",
            "data": {
                "year": 2019,
                "price": 2000,
                "CPU model": "Intel Core i9",
                "Hard disk size": "1 TB"
            }
        };
        const createObjectresp = await objAPI.addObject(obj1);
        const objectId = createObjectresp.data.id;
        const objNew = {
            "name": "Apple MacBook Pro 16",
            "data": {
                "year": 2019,
                "price": 3000,
                "CPU model": "Intel Core i9",
                "Hard disk size": "1 TB",
            }
        };
        const resp = await objAPI.updateObject(objectId, objNew);
        expect(resp.status).toBe(200);
        expect(resp.data.id).toBe(objectId);
        expect(resp.data.data.price).toBe(3000);
    });

    test('PUT: update object with invalid id', async () => {
        const objNew = {
            "name": "Apple MacBook Pro 16",
            "data": {
                "year": 2019,
                "price": 3000,
                "CPU model": "Intel Core i9",
                "Hard disk size": "1 TB",
            }
        };
        let id = -254;
        const resp = await objAPI.updateObject(id, objNew);
        expect(resp.status).toBe(404);
        expect(resp.data.error).toContain(`The Object with id = ${id} doesn't exist`);
    });

    // Partially update object
    test('PATCH: update object name', async () => {
        const obj1 = {
            "name": "Apple MacBook Pro 16",
            "data": {
                "year": 2019,
                "price": 2000,
                "CPU model": "Intel Core i9",
                "Hard disk size": "1 TB"
            }
        };
        const createObjectresp = await objAPI.addObject(obj1);
        const objectId = createObjectresp.data.id;
        const objNew = {
            "name": "HP new version"
        };
        const resp = await objAPI.partitiallyUpdateObject(objectId, objNew);
        expect(resp.status).toBe(200);
        expect(resp.data.id).toEqual(objectId);
        expect(resp.data.name).toEqual("HP new version");
    });

    test('PATCH: update object with invalid id', async () => {
        const objNew = {
            "name": "HP new version"
        };
        const resp = await objAPI.partitiallyUpdateObject(-25, objNew);
        expect(resp.status).toBe(404);
    });

    //delete object
    test('DELETE: delete object by id', async () => {
        const obj1 = {
            "name": "Apple MacBook Pro 16",
            "data": {
                "year": 2019,
                "price": 2000,
                "CPU model": "Intel Core i9",
                "Hard disk size": "1 TB"
            }
        };
        const createObjectresp = await objAPI.addObject(obj1);
        const objectId = createObjectresp.data.id;
        const resp = await objAPI.deleteObject(objectId);
        expect(resp.status).toBe(200);
        expect(resp.data.message).toEqual(`Object with id = ${objectId} has been deleted.`);
    });

    test('DELETE: delete object by id', async () => {
        let id = -255;
        const resp = await objAPI.deleteObject(id);
        expect(resp.status).toBe(404);
        expect(resp.data.error).toEqual(`Object with id = ${id} doesn't exist.`);
    });
});