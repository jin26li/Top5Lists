import * as React from 'react';
import { useContext, useState } from 'react'
import { GlobalStoreContext } from '../store'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function DeleteModal() {
  const { store } = useContext(GlobalStoreContext);
    let name = "";
    let open = false;
    if (store.currentList) {
        name = store.currentList.name;
    }
    if(store.listMarkedForDeletion) {
        open = true;
        name = store.listMarkedForDeletion.name;

    }

  function handleDeleteList(event) {
    event.stopPropagation();
    store.deleteMarkedList();
  }

  function handleClose(event){
    open = false;
    store.unmarkListForDeletion();
    store.hideDeleteListModal();
  }

  return (
    <div
    className="modal"
    id="delete-modal"
    >
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title"
           variant="h6" 
           component="h2">
            Delete the {name} Top 5 List?
          </Typography>
          <Button onClick={handleDeleteList}>
              Confirm</Button>
          <Button onClick={handleClose}>
              Cancel</Button>
        </Box>
      </Modal>
    </div>
  );
} 