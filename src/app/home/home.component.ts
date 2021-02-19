import { Component, OnInit } from '@angular/core';
import { dateInputsHaveChanged } from '@angular/material/datepicker/datepicker-input-base';
import { TaskService } from '../services/task.service';
import {Lembrete} from '../task/task.component'
import {dialogLembreteModel} from '../task/dialog-add/dialogLembrete.model'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   date: Date = new Date();

//model Crud//
   tarefas: Lembrete[]
   tarefa: dialogLembreteModel[]

//filtros model//
   filtroHome: Lembrete[]
   filtroKitchen: Lembrete[]
   filtroTransport:Lembrete[]
   filtroClothes: Lembrete[]
   filtroOthers: Lembrete[]

  constructor(private taskService: TaskService ) { }

  ngOnInit(): void {
    this.listarTarefas()

  }

  listarTarefas(){
    this.taskService.listarTarefas().subscribe((response:Lembrete[]) =>{
      this.tarefas = response
      console.log(response)
      this.filtros()
     
      // console.log(this.filtroKitchen,this.filtroHome,this.filtroClothes,this.filtroTransport,this.filtroOthers)
      // console.log(this.filtroHome)
    })
  }

  filtros(){
    this.filtroHome = this.tarefas.filter((param: Lembrete) =>{
      return param.icon === "home"
     
    }),

    this.filtroKitchen =  this.tarefas.filter((tarefa: Lembrete) =>{
      return tarefa.icon === "kitchen"
     
    })

    this.filtroTransport =  this.tarefas.filter((tarefa: Lembrete) =>{
      return tarefa.icon === "commute"
     
    })

    this.filtroClothes =  this.tarefas.filter((tarefa: Lembrete) =>{
      return tarefa.icon === "loyalty"
     
    })

    this.filtroOthers =  this.tarefas.filter((tarefa: Lembrete) =>{
      return tarefa.icon === "extension"
     
    })
  }
}

