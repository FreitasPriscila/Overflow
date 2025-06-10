import React, { useState } from 'react';
import styles from '../styles/usuario.module.css';
import Coruja from "../assets/img/coruja-mascote.png";
import { useNavigate } from 'react-router-dom';
/nao
// Ícone de fechar
const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

// Ícone de editar
const EditIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
    <path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
  </svg>
);

// Avatar da coruja (SVG simplificado baseado na imagem)
const OwlAvatar = () => (
  <svg className={styles.owlAvatar} viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    {/* Corpo da coruja */}
    <ellipse cx="60" cy="80" rx="35" ry="25" fill="#8B4513"/>
    
    {/* Cabeça */}
    <circle cx="60" cy="50" r="30" fill="#D2691E"/>
    
    {/* Olhos grandes */}
    <circle cx="50" cy="45" r="12" fill="#FFF"/>
    <circle cx="70" cy="45" r="12" fill="#FFF"/>
    <circle cx="50" cy="45" r="8" fill="#000"/>
    <circle cx="70" cy="45" r="8" fill="#000"/>
    <circle cx="52" cy="43" r="3" fill="#FFF"/>
    <circle cx="72" cy="43" r="3" fill="#FFF"/>
    
    {/* Bico */}
    <polygon points="60,55 55,65 65,65" fill="#FFA500"/>
    
    {/* Detalhes decorativos (penas) */}
    <path d="M45 25 Q50 20 55 25 Q60 30 60 35" fill="#FF6347" stroke="#FF4500" strokeWidth="1"/>
    <path d="M65 25 Q70 20 75 25 Q70 30 60 35" fill="#FF6347" stroke="#FF4500" strokeWidth="1"/>
    
    {/* Padrões no peito */}
    <path d="M45 70 Q60 75 75 70 Q70 85 60 90 Q50 85 45 70" fill="#CD853F"/>
    <path d="M50 75 L55 80 L60 75 L65 80 L70 75" stroke="#8B4513" strokeWidth="2" fill="none"/>
  </svg>
);

const Usuario = ({ onClose, userData = {} }) => {
  const [formData, setFormData] = useState({
    nome: userData.nome || 'Kassandra Maria',
    email: userData.email || 'kasslinda@dominio.com',
    sexo: userData.sexo || 'feminino'
  });

  const [isEditing, setIsEditing] = useState({
    nome: false,
    email: false
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleEditToggle = (field) => {
    setIsEditing(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  const handleSave = () => {
    // Lógica para salvar as alterações
    console.log('Salvando alterações:', formData);
    setIsEditing({ nome: false, email: false });
  };

  const handlePasswordChange = () => {
    navigate('/trocar_senha');
  };

  const navigate = useNavigate();

  return (
    <div className={styles.overlay}>
      <div className={styles.modalContainer}>
        {/* Botão de fechar */}
        <button onClick={onClose} className={styles.closeButton}>
          <CloseIcon />
        </button>

        {/* Seção do perfil (lado esquerdo) */}
        <div className={styles.profileSection}>
          <div className={styles.avatarContainer}>
            <img src={Coruja}  height="200px" alt="" />
          </div>
          
          <div className={styles.profileInfo}>
            <div className={styles.nameSection}>
              <span className={styles.label}>Nome</span>
              <span className={styles.name}>{formData.nome}</span>
            </div>
            
            <div className={styles.levelSection}>
              <span className={styles.label}>Nível</span>
              <span className={styles.level}>100Pts</span>
            </div>
            
            <div className={styles.dateSection}>
              <span className={styles.label}>Data de Registro</span>
              <span className={styles.date}>03/07/2024</span>
            </div>
          </div>
        </div>

        {/* Seção de edição (lado direito) */}
        <div className={styles.editSection}>
          {/* Campo Nome de Usuário */}
          <div className={styles.formGroup}>
            <label className={styles.fieldLabel}>Nome de Usuário</label>
            <div className={styles.inputContainer}>
              {isEditing.nome ? (
                <input
                  type="text"
                  value={formData.nome}
                  onChange={(e) => handleInputChange('nome', e.target.value)}
                  className={styles.input}
                  autoFocus
                />
              ) : (
                <span className={styles.fieldValue}>{formData.nome}</span>
              )}
              <button 
                onClick={() => handleEditToggle('nome')}
                className={styles.editButton}
              >
                <EditIcon />
              </button>
            </div>
          </div>

          {/* Campo Sexo */}
          <div className={styles.formGroup}>
            <label className={styles.fieldLabel}>Sexo</label>
            <div className={styles.radioGroup}>
              <label className={styles.radioLabel}>
                <input
                  type="radio"
                  name="sexo"
                  value="masculino"
                  checked={formData.sexo === 'masculino'}
                  onChange={(e) => handleInputChange('sexo', e.target.value)}
                />
                <span className={styles.radioText}>Masculino</span>
              </label>
              <label className={styles.radioLabel}>
                <input
                  type="radio"
                  name="sexo"
                  value="feminino"
                  checked={formData.sexo === 'feminino'}
                  onChange={(e) => handleInputChange('sexo', e.target.value)}
                />
                <span className={styles.radioText}>Feminino</span>
              </label>
              <label className={styles.radioLabel}>
                <input
                  type="radio"
                  name="sexo"
                  value="outros"
                  checked={formData.sexo === 'outros'}
                  onChange={(e) => handleInputChange('sexo', e.target.value)}
                />
                <span className={styles.radioText}>Outros</span>
              </label>
            </div>
          </div>

          {/* Campo E-mail */}
          <div className={styles.formGroup}>
            <label className={styles.fieldLabel}>E-mail</label>
            <div className={styles.inputContainer}>
              {isEditing.email ? (
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={styles.input}
                  autoFocus
                />
              ) : (
                <span className={styles.fieldValue}>{formData.email}</span>
              )}
              <button 
                onClick={() => handleEditToggle('email')}
                className={styles.editButton}
              >
                <EditIcon />
              </button>
            </div>
          </div>

          {/* Botões de ação */}
          <div className={styles.actionButtons}>
            <button onClick={handleSave} className={styles.saveButton}>
              Salvar alterações
            </button>
            <button onClick={handlePasswordChange} className={styles.passwordButton}>
              Alterar senha
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Usuario;

