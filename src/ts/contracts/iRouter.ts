import express = require('express');

export default interface iRouter {
    getRouter(): express.Router;
}