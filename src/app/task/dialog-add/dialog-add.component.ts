import { Component, Inject, OnInit } from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { dialogLembreteModel } from './dialogLembrete.model'
import { TaskService } from '../../services/task.service'
import { MatSnackBar } from '@angular/material/snack-bar'
@Component({
  selector: 'app-dialog-add',
  templateUrl: './dialog-add.component.html',
  styleUrls: ['./dialog-add.component.css']
})
export class DialogAddComponent implements OnInit {

  constructor(
    public DialogAddComponent: MatDialogRef<DialogAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private taskService: TaskService, private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {

  }

  error: boolean = false

  tarefa: dialogLembreteModel = {
    name: '',
    icon: '',
    color: '',
    description: '',
    id: ''
  }

  tarefas: dialogLembreteModel[]

  category = [
    { type: 'Comida', icon: 'kitchen', color: '#e9555d' },
    { type: 'Transpote', icon: 'commute', color: '#FF9800' },
    { type: 'Roupa', icon: 'loyalty', color: '#605ef3' },
    { type: 'casa', icon: 'home', color: '#cc00ff' },
    { type: 'Outros', icon: 'extension', color: '#2ba74b' },
  ]


  cadastrar() {
    if (this.tarefa.icon === 'kitchen') {
      this.tarefa.color = '#e9555d'
    }

    if (this.tarefa.icon === 'commute') {
      this.tarefa.color = '#FF9800'
    }

    if (this.tarefa.icon === 'loyalty') {
      this.tarefa.color = '#605ef3'
    }

    if (this.tarefa.icon === 'home') {
      this.tarefa.color = '#cc00ff'
    }

    if (this.tarefa.icon === 'extension') {
      this.tarefa.color = '#2ba74b'
    }

    if (this.tarefa.name && this.tarefa.icon != '') {
      this.taskService.cadastrarTarefa(this.tarefa).subscribe(tarefa => {
        this.tarefa = tarefa

        this.DialogAddComponent.close()
        this.openSnackBar('Cadastrado com sucesso 🎉🎉', 'ok')
      })
    }

  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
        duration: 2000,
    });
  }

}



