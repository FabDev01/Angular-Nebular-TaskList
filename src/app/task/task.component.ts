import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddComponent} from './dialog-add/dialog-add.component'
import { dialogLembreteModel } from './dialog-add/dialogLembrete.model'
import {TaskService} from '../services/task.service'
import {DialogEditComponent} from './dialog-edit/dialog-edit.component'

export interface Lembrete {
  color?: string;
  description: string;
  icon: string;
  name: string;
  id: string;
  
}

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})



export class TaskComponent implements OnInit {

tarefa: dialogLembreteModel[]

tarefas: Lembrete[]
tarefasFiltradas: Lembrete[]

public search: boolean = false
public lupe: boolean = true

  constructor(public dialog: MatDialog, private taskService: TaskService) { }

  ngOnInit(): void {
    this.listarTarefas()

  }

listarTarefas(){
  this.taskService.listarTarefas().subscribe((response:Lembrete[]) =>{
    this.tarefas = response
    this.tarefasFiltradas = response
    console.log(response)
  })
}

filter(event: KeyboardEvent): void {
  const inputValue = event.target as HTMLInputElement;
  if (inputValue.value.length === 0) {
    this.tarefasFiltradas = this.tarefas;
  } else {
    const regex = RegExp(inputValue.value.toLowerCase());
    this.tarefasFiltradas = this.tarefasFiltradas.filter(/*parâmetro*/ tarefas => !!regex.exec(tarefas.name.toLowerCase()));
  }
}

remover(id: number){
  this.taskService.removerTarefa(id).subscribe(tarefas => {
    tarefas = this.tarefas
    this.listarTarefas()
  })
}

openSearch() {
    this.search = true
    this.lupe = false
}

closeLupe() {
    this.search = false
    this.lupe = true
}

openDialogLembrete(): void {
  const dialogRef = this.dialog.open(DialogAddComponent, {})

  dialogRef.afterClosed().subscribe(() => { 
    this.listarTarefas()
  })
}

openDialogLembreteEdit(task: Lembrete) {
  let dialogRef = this.dialog.open(DialogEditComponent, {
      data: task,
  })

  dialogRef.afterClosed().subscribe(() => { })
}


}
