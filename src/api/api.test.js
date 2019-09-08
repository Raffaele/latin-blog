import api from './api';
import config from '../config.json';
import axios from 'axios';

describe('api test', () => {
    beforeEach(() => {
        jest.mock('axios');
    });
    describe('getPostList method', () => {
        let method;
        beforeEach(() => {
            method = api.getPostList;
        });
        it('should be defined', () => {
            expect(method).toBeDefined();
        });
        describe('should call axios.get', () => {
            beforeEach(() => {
                axios.get = jest.fn(() => Promise.resolve({}));
            });
            it('with posts path', () => {
                method();
                expect(axios.get).toBeCalledWith(`${config.api.basePath}/posts?`);
            });
            it('with posts path and ids params', () => {
                method([1,5,8]);
                expect(axios.get).toBeCalledWith(`${config.api.basePath}/posts?id=1&id=5&id=8`);
            });
        });

        describe('should return promise params', () => {
            const resolveValue = {
                data: []
            };
            beforeEach(() => {
                axios.get = jest.fn(() => Promise.resolve(resolveValue));
            });
            it('should resolve with the sent data', () => {
                expect(method()).resolves.toBe(resolveValue.data);
            });
        });
        
    });

    describe('getUsersList method', () => {
        let method;
        beforeEach(() => {
            method = api.getUsersList;
        });
        it('should be defined', () => {
            expect(method).toBeDefined();
        });

        describe('should call axios.get', () => {
            beforeEach(() => {
                axios.get = jest.fn(() => Promise.resolve({}));
            });
            it('with posts path', () => {
                method();
                expect(axios.get).toBeCalledWith(`${config.api.basePath}/users?`);
            });
            it('with posts path and ids params', () => {
                method([1,5,8]);
                expect(axios.get).toBeCalledWith(`${config.api.basePath}/users?id=1&id=5&id=8`);
            });
        });

        describe('should return get promise params', () => {
            const resolveValue = {
                data: []
            };
            beforeEach(() => {
                axios.get = jest.fn(() => Promise.resolve(resolveValue));
            });
            it('should resolve with the sent data', () => {
                expect(method()).resolves.toBe(resolveValue.data);
            });
        });

    });

    describe('getPostComments method', () => {
        let method;
        beforeEach(() => {
            method = api.getPostComments;
        });
        it('should be defined', () => {
            expect(method).toBeDefined();
        });

        describe('should call axios.get', () => {
            beforeEach(() => {
                axios.get = jest.fn(() => Promise.resolve({}));
            });
            it('with posts path', () => {
                const postId = 5;
                method(postId);
                expect(axios.get).toBeCalledWith(`${config.api.basePath}/comments?postId=${postId}`);
            });
        });

        describe('should return get promise params', () => {
            const resolveValue = {
                data: []
            };
            beforeEach(() => {
                axios.get = jest.fn(() => Promise.resolve(resolveValue));
            });
            it('should resolve with the sent data', () => {
                expect(method()).resolves.toBe(resolveValue.data);
            });
        });

    });

    describe('postComment method', () => {
        let method;
        beforeEach(() => {
            method = api.postComment;
        });
        it('should be defined', () => {
            expect(method).toBeDefined();
        });

        describe('should call axios.post', () => {
            beforeEach(() => {
                axios.post = jest.fn(() => Promise.resolve({}));
            });
            it('with posts path', () => {
                const postId = 5;
                const body = 'my comment body';
                const email = 'foo@bar.com';
                const name = 'user-name';

                method(postId, body, name, email);
                expect(axios.post).toBeCalledWith(`${config.api.basePath}/comments`, {
                    postId,
                    body,
                    name,
                    email
                });
            });
        });

        describe('should return post promise params', () => {
            const resolveValue = {
                data: []
            };
            beforeEach(() => {
                axios.post = jest.fn(() => Promise.resolve(resolveValue));
            });
            it('should resolve with the sent data', () => {
                expect(method()).resolves.toBe(resolveValue.data);
            });
        });
    });

    
});
