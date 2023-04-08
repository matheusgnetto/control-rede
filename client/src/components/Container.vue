<template>
  <div class="row align-items-top">
   
    <div class="col-sm-1">
      
    </div>
    
      <form class="col-sm-2 needs-validation" novalidate>
        <br>
        <br>

        <div class="mb-3">
        <input type="hidden" v-model="url" class="form-control mt-2" placeholder="url">
        <th>Andar</th> <input type="text" style="text-transform:capitalize" v-model="identificador" class="form-control mt-2" required>
        <div class="invalid-feedback">
        Campo obrigatório.
        </div>
        </div>

        <div class="mb-3">
        <th>Equipamento</th> <input type="text" style="text-transform:capitalize" v-model="equipamento" class="form-control mt-2" required>
        <div class="invalid-feedback">
        Campo obrigatório.
        </div>
        </div>

        <div class="mb-3">
        <th>Modelo</th> <input type="text" style="text-transform:capitalize" v-model="modelo" class="form-control mt-2">
        </div>

        <div class="mb-3">
        <th>Endereço IPv4</th> <input type="text" v-model="IP" class="form-control mt-2" onkeypress="$(this).mask('099.099.099.099');" required>
        <div class="invalid-feedback">
        Campo obrigatório.
        </div>
        <i><small class="text-muted">000.000.000.000</small></i>
        </div>

        <div class="mb-3">
        <th>Máscara de Sub-rede IPv4</th> <input type="text" v-model="netmask" class="form-control mt-2" onkeypress="$(this).mask('099.099.099.099');" required>
        <div class="invalid-feedback">
        Campo obrigatório.
        </div>
        <i><small class="text-muted">000.000.000.000</small></i>
        </div>

        <div class="mb-3">
        <th>DHCP Ativado</th> <select v-model="DHCP" class="form-control mt-2" required>
        <option disabled value="">Selecione</option>
        <option>Sim</option>
        <option>Nao</option>
        </select>
        <div class="invalid-feedback">
        Campo obrigatório.
        </div>
        </div>

        <div class="mb-3">
        <th>Endereço Físico</th> <input type="text" style="text-transform:uppercase" v-model="MAC" class="form-control mt-2" onkeypress="$(this).mask('AA:AA:AA:AA:AA:AA');" required>
        <div class="invalid-feedback">
        Campo obrigatório.
        </div>
        <i><small class="text-muted">XX:XX:XX:XX:XX:XX</small></i>
        </div>

        <div class="mb-3">
        <th>Informações do Equipamento</th> <input type="text" v-model="info" class="form-control mt-2">
        </div>

        <div class="mb-3">
        <button type="button" @click="postAdrs" class="btn-block btn-danger" id="save">Salvar</button> 
        </div>
      </form>

    <div class="col-sm-1">
      
    </div>

    <div class="col-sm-6">
    <br>  
      <input class="form-control" id="myInput" type="text" placeholder="Procurar...">
    <br>
      <table id="tableAdrs" class="table table-sm table-striped table-bordered ALIGN=center" data-sortable>
        <thead class="p-3 mb-2 bg-danger text-white">
          <tr align=center>
          <th>Andar</th>
          <th>Equipamento</th>
          <th>Modelo</th>
          <th>IP</th>
          <th>NETMASK</th>
          <th>DHCP</th>
          <th>MAC</th>
          <th>Info</th>
          <th>Editar</th>
          <th>Excluir</th>
          </tr>
          </thead>
         <tbody id="myTable" class="p-3 mb-2 bg-light text-black">
          <tr align=center v-for="adrs in adress" v-bind:key="adrs.url">
            <td style="text-align:center;vertical-align:middle;text-transform:capitalize" class="font-weight-bold">{{adrs.identificador}}</td>
            <td style="text-align:center;vertical-align:middle;text-transform:capitalize" class="font-weight-bold">{{adrs.equipamento}}</td>
            <td style="text-align:center;vertical-align:middle;text-transform:capitalize" class="font-weight-bold">{{adrs.modelo}}</td>
            <td style="text-align:center;vertical-align:middle" class="font-weight-bold">{{adrs.IP}}</td>
            <td style="text-align:center;vertical-align:middle" class="font-weight-bold">{{adrs.netmask}}</td>
            <td style="text-align:center;vertical-align:middle" class="font-weight-bold">{{adrs.DHCP}}</td>
            <td style="text-align:center;vertical-align:middle;text-transform:uppercase" class="font-weight-bold">{{adrs.MAC}}</td>
            <td>
              <button @click="getOne(adrs)" class="btn bn-sm btn-secondary" data-toggle="modal" data-target="#infoModal"><i class="fa fa-book"></i></button>
            </td>
            <td>
              <button @click="getOne(adrs)" class="btn bn-sm btn-secondary"><i class="fa fa-pencil"></i></button>
            </td>
            <td>
               <button @click="confirmDelete(adrs)" class="btn bn-sm btn-danger"><i class="fa fa-trash"></i></button>
            </td>
          </tr>
        </tbody>
      </table> 
    </div>

    <div class="modal fade" id="infoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Informações do Equipamento</h5><h5>{{this.identificador}}</h5>
          </div>
          <div class="modal-body">
            <tr>
            <h6 style="text-transform:capitalize">{{this.equipamento}} {{this.modelo}}</h6>  
            </tr>
            <tr>
            <td>{{this.info}}</td>
            </tr>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-dismiss="modal">Fechar</button>
          </div>
        </div>
      </div>
   </div>
  </div>
</template>

<script>
 import axios from 'axios'
export default {
  name: 'Container',
  props: {
    msg: String
  },
  data(){
    return{
      adress:null,
      url:'',
      identificador:'',
      equipamento:'',
      modelo:'',
      IP:'',
      netmask:'',
      DHCP:'',
      MAC:'',
      info:''
    }
  },
  mounted(){ 
    this.getAll();
  },
  methods:{
    getAll(){
      axios.get(`http://localhost:8000/adress`)
      .then((res)=>{
        this.adress=res.data;
        this.identificador='';
        this.equipamento='';
        this.modelo='',
        this.IP='';
        this.netmask='';
        this.DHCP='';
        this.MAC='';
        this.url='';
        this.info='';
      })
    },
    getOne(adrs){
      this.url = adrs.url;
      this.identificador = adrs.identificador;
      this.equipamento = adrs.equipamento;
      this.modelo = adrs.modelo;
      this.IP = adrs.IP;
      this.netmask = adrs.netmask;
      this.DHCP = adrs.DHCP;
      this.MAC = adrs.MAC;
      this.info = adrs.info;
    },
    
    confirmDelete(adrs) {
      const confirmed = window.confirm('Tem certeza que deseja excluir o item selecionado?');
      if (confirmed) {
        this.deleteOne(adrs);
      }
    },
    deleteOne(adrs) {
        axios.delete(adrs.url,{auth:{
        username:'info',
        password:'admin'
      }})
      .then(()=>{
        this.getAll();
      })
    },

    
    postAdrs(){
      if(this.url == ''){
          axios.post(`http://localhost:8000/adress/`,
                {identificador:this.identificador,equipamento:this.equipamento,modelo:this.modelo,IP:this.IP,netmask:this.netmask,DHCP:this.DHCP,MAC:this.MAC,info:this.info},
                {auth:{username:'info',password:'admin'}}
                )
                .then(()=>{
                  this.getAll();
                 })
      }else{
        axios.put(this.url,
      {identificador:this.identificador,equipamento:this.equipamento,modelo:this.modelo,IP:this.IP,netmask:this.netmask,DHCP:this.DHCP,MAC:this.MAC,info:this.info},
      {auth:{username:'info',password:'admin'}}
      )
      .then(()=>{
        this.getAll();
      })
      }
    }
  }
}

</script>

<style scoped>

</style>
