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
   tarefas: Lembrete[]
   tarefa: dialogLembreteModel[]
   filtroTarefas: Lembrete[]
   filtroTarefas2: Lembrete[]
  constructor(private taskService: TaskService ) { }

  ngOnInit(): void {
    this.listarTarefas()
    // console.log(this.tarefas)
    
    
  }

  listarTarefas(){
    this.taskService.listarTarefas().subscribe((response:Lembrete[]) =>{
      this.tarefas = response
      console.log(response)
      this.filtros()
     

      console.log(this.filtroTarefas2)
      console.log(this.filtroTarefas)
    })
  }

  filtros(){
    this.filtroTarefas = this.tarefas.filter((tarefa: Lembrete) =>{
      return tarefa.icon === "home"
     
    })

    this.filtroTarefas2 =  this.tarefas.filter((tarefa: Lembrete) =>{
      return tarefa.icon === "kitchen"
     
    })
  }
}

