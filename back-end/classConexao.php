<?php
    abstract class classConexao{
        protected function conecta("mysql:host=localhost;","dbname=react","root","")
        {
            try{

            }catch(PDOException $Erro){
                return $Erro->getMessage();
            }
        }
    }
?>