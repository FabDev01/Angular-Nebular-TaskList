import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Lembrete } from '../task.component';
import { MatSnackBar } from '@angular/material/snack-bar'
import { TaskService } from '../../services/task.service'
@Component({
  selector: 'app-dialog-edit',
  templateUrl: './dialog-edit.component.html',
  styleUrls: ['./dialog-edit.component.css']
})
export class DialogEditComponent implements OnInit {
  tarefa: Lembrete

  category = [
    { type: 'Comida', icon: 'kitchen', color: '#e9555d' },
    { type: 'Transpote', icon: 'commute', color: '#FF9800' },
    { type: 'Roupa', icon: 'loyalty', color: '#605ef3' },
    { type: 'casa', icon: 'home', color: '#cc00ff' },
    { type: 'Outros', icon: 'extension', color: '#2ba74b' },
  ]

  constructor(public DialogEditComponentRef: MatDialogRef<DialogEditComponent>,
    @Inject(MAT_DIALOG_DATA) public dataTask: Lembrete, private _snackBar: MatSnackBar, private taskService: TaskService) { }

  ngOnInit(): void {
    this.tarefa = this.dataTask
    this.taskService.listarTarefas().subscribe()
  }

  salvarEdit(id:any) {
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
      this.tarefa.color = '#0000ff'
    }
    if (this.tarefa.icon === 'extension') {
      this.tarefa.color = '#2ba74b'
    }

    const lembreteNovo: Lembrete = {
      name: this.tarefa.name,
      icon: this.tarefa.icon,
      description: this.tarefa.description,
      color: this.tarefa.color,
      id: this.tarefa.id
    }
    this.taskService.LembreteEdit(this.tarefa.id, lembreteNovo).subscribe(() => {

      this.DialogEditComponentRef.close()
      this.openSnackBar('Editado com sucesso 🎉🎉', 'ok')
    })

  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
        duration: 2000,
    });
  }
}

  

