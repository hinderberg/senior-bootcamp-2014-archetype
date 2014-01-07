

exports.graphs = function (req, res) {


  res.render('layout', {
    title: 'Magiske grafer',
    partials: { content: '_graphs' }
  });



};