import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

function connect(connectionString) {
    mongoose.connect(connectionString).then(() => {
        console.log('Successfully connected!');
    }).catch(console.error.bind(console, 'Connection error: '));
}

function mountConnectionString(host, db) {
    return `mongodb://${host}/${db}`;
}

function mountAuthenticatedConnectionString(host, user, password, db) {
    return `mongodb://${user}:${password}@${host}/${db}`;
}

function createConnectionString(host, user, password, db) {
    let connectionString;
    if (!user || !password) {
        connectionString = mountConnectionString(host, db);
    } else {
        connectionString = mountAuthenticatedConnectionString(host, user, password, db);
    }

    return connectionString;
}


function connectToDatabase(db) {
    const connectionString = createConnectionString(db.host, db.user, db.password, db.database);
    connect(connectionString);
}

export default {
    connectToDatabase,
    connect,
};
