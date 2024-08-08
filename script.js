//「タスク追加」ボタンの要素を取得する
document.getElementById('addTaskBtn').addEventListener('click', function() {
    //入力フィールドの値を取得:
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
    }
});

function addTask(taskText) {
    const taskList = document.getElementById('taskList');

    // タスクのリストアイテムを作成
    const li = document.createElement('li');
    li.textContent = taskText;

    // 完了ボタン
    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    // 削除ボタン
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '削除';
    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(li);
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}