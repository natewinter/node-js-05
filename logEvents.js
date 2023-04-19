const { format } = require('date-fns');
const { v4: uuid } = require('uuid');

const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const logEvents = async (message, logName) => {
  const dateTime = `${format(new Date(), 'yyyy/MM/dd\tHH:mm:ss')}`;
  const logItem = `${dateTime} \t${uuid()}\t${message}\n`;
  console.log(logItem);
  //   try catch block for async function
  try {
    if (!fs.existsSync(path.join(__dirname, 'logs'))) {
      await fsPromises.mkdir(path.join(__dirname, 'logs'));
    }
    //testing3
    // await fsPromises then append/create file
    await fsPromises.appendFile(
      //path.join __dirname is current directory, in the logs folder, in file called eventLog.txt
      path.join(__dirname, 'logs', logName),
      logItem
    );
  } catch (err) {
    console.log(err);
  }
};

//exporting log events function
module.exports = logEvents;
