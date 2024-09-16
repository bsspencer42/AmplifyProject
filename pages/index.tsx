import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import Link from "next/link";
import type { Schema } from "@/amplify/data/resource";
import Button from "@mui/material/Button"
import { Typography, Container, List, ListItemButton, Modal, Box } from "@mui/material";
import { FormControl, InputLabel, Input } from "@mui/material";
import styles from "../styles/App.module.css";

const client = generateClient<Schema>();

export default function App() {
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const [openCreate, setOpenCreate] = useState<boolean>(false);
  const [deleteId, setDeleteId] = useState<string>("");
  const [createContent, setCreateContent] = useState<string>("");

  function listTodos() {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }

  useEffect(() => {
    listTodos();
  }, []);

  function openCreateTodoModal() {
    setCreateContent("")
    setOpenCreate(true)
  }

  function handleCreate() {
    console.log("Create todo")
    client.models.Todo.create({
      content: createContent,
    });
    setCreateContent("");
    setOpenCreate(false);
  }

  function openDeleteTodoModal(id: string) {
    setDeleteId(id);
    setOpenDelete(true);
  }

  function handleDelete() {
    const shouldDelete = deleteId !== "";
    shouldDelete && client.models.Todo.delete({ id: deleteId });
    setDeleteId("");
    setOpenDelete(false)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
    setCreateContent(event.target.value);
  };

  return (
    <Container className={styles.container}>
      <Typography variant="h2" color="default" align="center" gutterBottom>
        Todo List
      </Typography>
      <Button
        type="submit"
        variant="contained"
        onClick={openCreateTodoModal}
        className={styles.button}
      >
        Create Todo
      </Button>
      <Modal open={openCreate} onClose={() => setOpenCreate(false)}>
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <FormControl>
            <InputLabel>Todo Item</InputLabel>
            <Input
              value={createContent}
              onChange={handleChange}
              aria-describedby="input-helper-text"
            />
            <Button onClick={() => handleCreate()}>Submit Todo</Button>
          </FormControl>
        </Box>
      </Modal>
      <List className={styles.list}>
        {todos.map((todo) => (
          <ListItemButton
            key={todo.id}
            onClick={() => openDeleteTodoModal(todo.id)}
            className={styles.listItem}
          >
            {todo.content}
          </ListItemButton>
        ))}
      </List>
      <Modal open={openDelete} onClose={() => setOpenDelete(false)}>
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h4">Delete Todo Item?</Typography>
          <Button onClick={() => handleDelete()}>Yes</Button>
          <Button onClick={() => setOpenDelete(false)}>No</Button>
        </Box>
      </Modal>
      <Typography variant="h4" className={styles.about}>
        <Link href="/about">About the author</Link>
      </Typography>
    </Container>
  );
}
