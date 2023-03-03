import React from 'react'

const Loader = () => {
  return (
    <div class="align-center flex items-center justify-center pt-[30%] z-0">
        <div class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] z-50" role="status">
            <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)] z-60 blur-0">Loading...</span>
        </div>
    </div>

  )
}

export default Loader