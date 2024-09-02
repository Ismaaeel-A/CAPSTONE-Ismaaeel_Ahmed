<template>
    <div class="card g-5">
      <div class="card-header">
          <slot name="cardHeader"></slot>
      </div>
  
      <div class="card-body">
          <slot name="cardBody"></slot>
      </div>
    </div>
  </template>

<style scoped>
  .card{
    width: 38rem;
    background: #2a2a2a;
    text-align: center;
    border: none;
    
    &:hover{
      & .card-body , .card-header{
        transition: background 2s;
        background: #818181;
      } 
    }
  }

  .card-body{
    border-top: 4px solid #e9e9e9;
    border-bottom: 1px solid #e9e9e9;
  }
  
</style>