import logger from 'winston';
import Yarn from '../lib';

export default function() {
  logger.profile('yarn');

  var yarn = new Yarn();
  yarn.cleanDestination()
    .then(function() {
      logger.profile('yarn');

      process.exit(0);
    })
    .catch(function(e) {
      console.log(e.stack);
      throw e;
    });
}