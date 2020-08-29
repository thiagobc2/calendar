<?php
    include ("classConexao.php");

    class ClassSelecao extends classConexao{

        #selecionar os dados no banco
        public function selecao($Par=null){
            if($Par==null){ 
                $Crud=$this->conecta()->prapare("Select DISTINCT * from Agenda");
            }else{
                $Crud=$this->conecta()->prapare("Select DISTINCT * from Agenda");
            }
        }
    }
?>