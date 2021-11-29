//4章 条件分岐
function diet(myWeight) {
    if(myWeight >= 80) {//80以上
        console.log('もっと頑張りましょう');
    } else if(myWeight >= 70) {//70以上
        console.log('確実に成果が出ていますよ');
    } else if(myWeight > 60) {//60超
        console.log('ついにここまで来ましたね');
    } else {//60以下
        console.log('ダイエット成功');
    }
}

//5章 繰り返し処理
function battle() {
//攻撃力は0〜9の乱数で生成
    const atk = 10;
//敵の体力は10
    let hp = 10;

//毎回
    while(true) {
//prompt()から攻撃するか逃げるかを数値で入力できる
        const command = prompt('敵が現れた！（【1】攻撃　【2】逃げる）');

        if(command === '2') {
//逃げるを選択した場合は「無事に逃げました」のメッセージを出力
            console.log('無事に逃げました');
            break;//ループを抜ける
        } else if(command === '1') {
//攻撃力の数値を「◯の攻撃！」のように毎回出力する
//「敵の体力は残り◯です」というメッセージを毎回出力する
            const damage = Math.floor(Math.random() * atk);
            hp = Math.max(hp - damage, 0);
            console.log(damage + 'の攻撃！敵の体力は残り' + hp + 'です');
        } else if(command == null) {
            break;//ループを抜ける
        } else {
            console.log('コマンドは1か2を入力してください。');
            continue;
        }
    
//敵を倒したら「敵を倒した！」というメッセージを出力
        if(hp <= 0) {
            console.log('敵を倒した！');
            break;//ループを抜ける
        }
    }
//ゲーム終了時に「ゲーム終了」というメッセージを出力
    console.log('ゲーム終了');
}

//6章 関数
function USD2JPY() {
//1ドル108円で計算する
    const usdjpy = 108;

//関数を利用した換算処理を作る
    function dollarToYen(dollar) {
        return dollar * usdjpy;
    }

//繰り返し何度も入力できる
    while(true) {
//prompt()を利用してドルを入力できるようにする
        const usd = prompt('円換算：ドルを入力してください。');
        
//「キャンセル」または何も入力せずに「OK」ボタンをクリックするとプログラムは終了
        if(usd == null || usd == '') break;
        
//換算結果は「◯円です」のように出力する
        console.log(dollarToYen(usd) + '円です');
    }
}

//呼び出し
//diet(65);//4章
//battle();//5章
//USD2JPY();//6章