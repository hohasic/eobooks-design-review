
(() => {
 'use strict';
 const dialog = document.querySelector('#demo-dialog');
 const explain = message => { document.querySelector('#dialog-message').textContent = message; if (!dialog.open) dialog.showModal(); };
 document.querySelectorAll('[data-pending]').forEach(a => a.addEventListener('click',e => {e.preventDefault();explain(a.dataset.pending + '는 이번 3화면 정적 시안의 범위 밖입니다. 연결 기능은 준비 중이며 실제 서비스를 실행하지 않습니다.');}));
 document.querySelectorAll('[data-search]').forEach(f => f.addEventListener('submit',e => {e.preventDefault();const q=f.querySelector('input').value.trim();if(!q){f.querySelector('input').setCustomValidity('검색어를 입력해 주세요.');f.reportValidity();return;}explain('통합검색 (US-027)은 준비 중입니다. 실제 검색이나 데이터 전송은 하지 않습니다.');}));
 document.querySelectorAll('[data-search] input').forEach(i=>i.addEventListener('input',()=>i.setCustomValidity('')));
 const pw=document.querySelector('#password'), toggle=document.querySelector('#password-toggle');
 if(toggle){toggle.addEventListener('click',()=>{const show=pw.type==='password';pw.type=show?'text':'password';toggle.setAttribute('aria-pressed',String(show));toggle.setAttribute('aria-label',show?'비밀번호 숨김':'비밀번호 표시');});}
 const login=document.querySelector('#login-form');
 if(login){login.addEventListener('submit',e=>{e.preventDefault();pw.value='';explain('정적 디자인 시안이므로 실제 로그인 인증을 수행하지 않습니다. 화면의 공통 실패 안내는 디자인 비교용 상태입니다. 실제 아이디나 비밀번호를 입력하지 마세요.');});}
 window.addEventListener('pagehide',()=>{if(pw){pw.value='';pw.type='password';toggle.setAttribute('aria-pressed','false');toggle.setAttribute('aria-label','비밀번호 표시');}});
 const filter=document.querySelector('#filter-form');
 if(filter){filter.addEventListener('submit',e=>{e.preventDefault();const fd=new FormData(filter);let count=0;const keyword=String(fd.get('keyword')||'').trim().toLocaleLowerCase();document.querySelectorAll('[data-book]').forEach(card=>{const match=['school','curriculum','subject'].every(k=>!fd.get(k)||fd.get(k)===card.dataset[k])&&(!keyword||card.dataset.title.toLocaleLowerCase().includes(keyword));card.hidden=!match;if(match)count++;});document.querySelector('#result-count').textContent=count;document.querySelector('#empty-state').hidden=count!==0;document.querySelector('#result-status').textContent='조회된 가상 교과서 '+count+'권';});}
 const slides=[['오늘의 배움이<br>내일의 가능성으로.','좋은 책과 교육 콘텐츠로<br>배움의 다음 페이지를 함께 엽니다.'],['생각을 키우는 책,<br>배움을 넓히는 시간.','교육과정에 맞춘 교과서로<br>새로운 배움의 시작을 만나보세요.'],['한 권의 책에서<br>더 넓은 세상으로.','오늘의 질문과 내일의 발견을<br>교육 콘텐츠로 이어갑니다.']];
 let current=0;const hero=document.querySelector('#hero-copy');
 const slideTo=n=>{current=(n+slides.length)%slides.length;hero.querySelector('h1').innerHTML=slides[current][0];hero.querySelector('p').innerHTML=slides[current][1];document.querySelector('#slide-count').textContent=String(current+1).padStart(2,'0');document.querySelectorAll('[data-slide-to]').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.slideTo)===current)));};
 document.querySelectorAll('[data-slide]').forEach(b=>b.addEventListener('click',()=>slideTo(current+Number(b.dataset.slide))));
 document.querySelectorAll('[data-slide-to]').forEach(b=>b.addEventListener('click',()=>slideTo(Number(b.dataset.slideTo))));
})();
