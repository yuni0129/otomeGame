'use strict';

{
    const talkElement = document.getElementById('talk');
    const choicesElement = document.getElementById('choices');
    const personElement = document.getElementById('person');
    const commentElement = document.getElementById('comment');

    let currentSegmentIndex = 0;

    // セグメントの表示
    function displaySegment(storySegmentsIndex, storySegments) {
        
        const segment = storySegments[storySegmentsIndex];
        personElement.textContent = segment.speaker;

        // テキストを表示
        talkElement.textContent = segment.content;

        // 選択肢の表示
        choicesElement.innerHTML = '';
        segment.choices.forEach((choice, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = choice.text;
            listItem.addEventListener('click', () => {
                commentElement.textContent = choice.comment; // 選択された選択肢のコメントを先に表示する
                
                setTimeout(() => { // コメントを表示した後に次のセグメントに遷移する
                    currentSegmentIndex = choice.nextSegment;
                    displaySegment(currentSegmentIndex, storySegments); // storySegments を渡す
                }, 0);
            });
            choicesElement.appendChild(listItem);
        });
    }
    
    displaySegment(0, storySegments); // 最初のセグメントを表示する。ここで storySegmentsIndex を 0 に設定する。
}