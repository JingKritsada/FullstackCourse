<template>
  <header class="mb-10">
    <div
      class="w-full px-3 py-9 bg-quaternary flex space-x-3.5 md:justify-center md:flex-col md:items-center md:space-x-0"
    >
      <div class="flex-none">
        <img
          src="@/assets/images/avatar.png"
          alt="Avatar"
          class="rounded-full w-20 h-20 border-2 border-primary md:w-52 md:h-52 md:mb-4"
        />
      </div>
      <div>
        <div class="font-bold text-xl md:text-center md:text-2xl">
          Kritsada Limsripraphan
        </div>
        <p class="text-base md:text-center md:text-xl">
          Computer Engineering Student
        </p>
        <div class="pt-2 flex flex-wrap gap-2 md:justify-center md:mt-2">
          <BaseLink
            size="small"
            to="mailto: jing.kritsada@gmail.com"
            class="md:text-base md:px-7 md:py-3 md:space-x-2"
          >
            <span>Email</span>
            <IconEnvelope class="inline-block w-3 md:w-4" />
          </BaseLink>
          <BaseLink
            size="small"
            to="https://line.me/ti/p/Qmb4gg96f1"
            class="md:text-base md:px-7 md:py-3 md:space-x-2"
            target="blank"
          >
            <span>LINE</span>
            <IconLine class="inline-block w-3 md:w-4" />
          </BaseLink>
          <BaseLink
            size="small"
            to="https://www.linkedin.com/in/jingkritsada/"
            class="md:text-base md:px-7 md:py-3 md:space-x-2"
            target="blank"
          >
            <span>Linkedin</span>
            <IconLinkedin class="inline-block w-3 md:w-4" />
          </BaseLink>
        </div>
      </div>
    </div>
  </header>
</template>
