from sqlalchemy import Column, Integer, String, Date, ForeignKey
from database.connection import Base

class Biblioteca(Base):
    __tablename__ = "biblioteca"
    id = Column(Integer, primary_key=True, index=True)
    usuario_id = Column(Integer, ForeignKey("usuarios.id", ondelete="CASCADE"), nullable=False)
    livro_id = Column(String(100), nullable=False)
    status_leitura = Column(String(30), default="nao_iniciado")
    data_inicio = Column(Date, nullable=True)
    data_prevista_termino = Column(Date, nullable=True)