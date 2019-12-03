'use strict';
const express = require('express');

const app = express();
const port = 3000;

app.use();

app.get('/', (requist, res) => {
  Todo.all((err, todos) =>
    res.format({
      json: () => {
        res.status(200).json(todos);
      },
      html: () => {
        res.status(406).send('Not supported yet\n');
      },
    }),
  );
});

app.post('/', (requist, res) => {
  console.log(requist.body);
  var postNewTodo = JSON.parse(requist.body);
  Todo.add(postNewTodo);
  res.status(201).json();
});


app.delete('/:id', (requist, res) => {
  var id = parseInt(requist.params.id);
  Todo.delete(id, err => {
    if (err) {
      res.status(404).send();
    } else {
      res.status(200).send();
    }
  });
});
app.put('/:id', (requist, res) => {
    var id = requist.params.id;
    var updatedTodo = JSON.parse(requist.body);
    updatedTodo.id = parseInt(id);
    Todo.update(updatedTodo, (err, data) => {
      if (err) {
        res.status(404, 'The task is not found').send();
      } else {
        res.status(204).send(data);
      }
    });
  });

app.listen(port);