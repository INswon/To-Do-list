// 「タスク追加」ボタンの要素を取得し、クリックイベントリスナーを追加
document.getElementById('addTaskBtn').addEventListener('click', function() {
    // タスク入力フィールドの値を取得
    const taskInput = document.getElementById('taskInput');
    // 入力されたタスクテキストの前後の空白を削除して取得
    const taskText = taskInput.value.trim();

    // 入力が空でない場合にのみタスクを追加
    if (taskText !== '') {
        addTask(taskText); // タスクをリストに追加する関数を呼び出し
        taskInput.value = ''; // 入力フィールドをクリア
    }
});

// タスクをリストに追加する関数
function addTask(taskText) {
    // タスクリストの要素を取得
    const taskList = document.getElementById('taskList');

    // 新しいリストアイテム要素を作成し、テキストを設定
    const li = document.createElement('li');
    li.textContent = taskText;

    // リストアイテムをクリックしたときに完了状態を切り替える（クラスをトグル）
    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    // 削除ボタンを作成し、クリックされたらリストからアイテムを削除
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '削除';
    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(li);
    });

    // リストアイテムに削除ボタンを追加し、タスクリストに追加
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}
