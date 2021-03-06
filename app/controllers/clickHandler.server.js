'use strict';

function clickHandler (db) {

	var clicks = db.collection('clicks');

	this.getClicks = function (req, res) { // getClicks finds and returns the number of clicks in the 'clicks' collection

	//	var clickProjection = { '_id': false }; // we don't want the default _id value included in the results
		
	//	var clickProjection = { _id: 0 };

		clicks.findOne({}, { _id: 0 }, function (err, result) { //finds the first document (analgous to record or row in relational databases) that meet the query criteria
		                                                             // defining three arguments here: the query, the projection, and the callback function once the query results are complete
		                                                             // '{}' is the query argument - specifically, this will return all documents
	
			if (err) {
			   console.log('Hey, the findOne() threw an error!');
				throw err;
			}

			if (result) {
			        var whatamI = result;
			        var trtrtr = typeof whatamI;
			        console.log(trtrtr);
                    res.json(result);
     } else {
        clicks.insert({ 'clicks': 0 }, function (err) {
           if (err) {
                  throw err;
           }

                  clicks.findOne({}, { _id: 0 }, function (err, doc) {

                     if (err) {
                        throw err;
                     }
                        var whatamI = result;
			        var trtrtr = typeof whatamI;
			        console.log(trtrtr);
                     res.json(doc);
                  });
               });
            }
		});
	};
}

module.exports = clickHandler;