import { useEffect, useState } from "react";
import Filters from "./components/Filters";
import Table from "./components/Table";
import Modal from "./components/Modal";
import DeleteUserModal from "./components/DeleteUserModal";
import FilterLearnersModal from "./components/FilterlearnersModal";

function App() {
  const [users, setUsers] = useState(getUsers());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [editUser, setEditUser] = useState(null);
  const [appliedFilters, setAppliedFilters] = useState({
    language: "",
    objective: "",
    subscription: "",
  });
  const [search, setSearch] = useState("");

  useEffect(() => {
    saveUsers();
  }, [users]);

  function saveUsers() {
    localStorage.setItem("users", JSON.stringify(users));
  }

  function getUsers() {
    const localUsers = localStorage.getItem("users");
    if (localUsers) {
      return JSON.parse(localUsers);
    } else {
      return [];
    }
  }

  function openModal() {
    setIsModalOpen(true);
  }
  function closeModal() {
    setIsModalOpen(false);
    setEditUser(null);
  }

  function openDeleteModal(id) {
    setIsDeleteModalOpen(true);
    setDeleteId(id);
  }
  function closeDeleteModal() {
    setIsDeleteModalOpen(false);
    setDeleteId(null);
  }

  function openFilterModal() {
    setIsFilterModalOpen(true);
  }
  function closeFilterModal() {
    setIsFilterModalOpen(false);
  }

  function addUser(newUser) {
    setUsers((prev) => [...prev, newUser]);
    closeModal();
  }

  function removeUser() {
    setUsers((prev) => prev.filter((el) => el.id !== deleteId));
    closeDeleteModal();
  }
  function handleEditUser(user) {
    setUsers((prev) =>
      prev.map((el) => {
        if (el.id === editUser.id) {
          return { id: editUser.id, ...user };
        }
        return el;
      })
    );
    closeModal();
  }

  function handleApplyFilters(selectedFilters) {
    setAppliedFilters(selectedFilters);
    closeFilterModal();
  }

  function startEdit(user) {
    setEditUser(user);
    openModal();
  }

  function filterUsers() {
    let filteredUsers = users;
    if (appliedFilters.language) {
      filteredUsers = filteredUsers.filter(
        (user) => user.language === appliedFilters.language
      );
    }
    if (appliedFilters.objective) {
      filteredUsers = filteredUsers.filter(
        (user) => user.objective === appliedFilters.objective
      );
    }
    if (appliedFilters.subscription) {
      filteredUsers = filteredUsers.filter(
        (user) => user.subscription === appliedFilters.subscription
      );
    }
    if (search) {
      filteredUsers = filteredUsers.filter(
        (user) =>
          user.name.toLowerCase().includes(search.toLowerCase()) ||
          user.email.toLowerCase().includes(search.toLowerCase())
      );
    }
    return filteredUsers;
  }
  const filteredUsers = filterUsers();
  return (
    <div className="container">
      <Filters
        onOpen={openModal}
        onOpenFilter={openFilterModal}
        onSearch={setSearch}
        search={search}
      />
      <Table
        users={filteredUsers}
        onRemove={openDeleteModal}
        onEdit={startEdit}
      />
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={editUser ? handleEditUser : addUser}
        editUser={editUser}
      />
      <DeleteUserModal
        isOpen={isDeleteModalOpen}
        onClose={closeDeleteModal}
        onSubmit={removeUser}
      />
      <FilterLearnersModal
        isOpen={isFilterModalOpen}
        onClose={closeFilterModal}
        onSubmit={handleApplyFilters}
      />
    </div>
  );
}

export default App;
