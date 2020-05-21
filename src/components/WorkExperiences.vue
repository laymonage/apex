<template>
  <BaseCard>

    <template v-slot:header>
      Work Experiences
    </template>

    <div class="flex flex-col md:flex-row-reverse text-gray-700">
      <div class="flex flex-col items-center mb-8 md:mb-0 md:w-1/4">
        <div class="mb-4 md:mb-2">
          <img
            alt="Faculty of Computer Science, Universitas Indonesia"
            src="../assets/img/csui_horizontal_transparent_english.png"
            class="w-1/2 ph:w-3/4 md:w-3/4 lg:w-1/2 mx-auto">
        </div>
        <div class="flex items-center">
          <span>Aug 2018</span><span class="mx-1">-</span><span>present</span>
        </div>
        <div class="hidden md:flex w-1/4 h-full">
          <div class="border-l border-solid border-4 mx-auto my-2"></div>
        </div>
      </div>
      <div class="flex flex-col items-start md:w-3/4 md:mr-8 md:mb-8">
        <div class="flex flex-col">
          <div class="flex flex-col text-xl ph:text-lg">
            <span class="font-semibold">Teaching Assistant</span>
            <span>Faculty of Computer Science, Universitas Indonesia</span>
          </div>
        </div>
        <div class="flex flex-col mt-4">
          <span>
            Tutored students, designed problem sets, and graded student
            assignments in four different courses.
          </span>
          <ul class="list-decimal font-semibold ml-6 p-2">
            <li>
              <div class="flex flex-col">
                <span>
                  Programming Foundations I
                </span>
                <span class="font-normal">
                  Programming basics, OOP basics, and GUI basics in Python.
                </span>
              </div>
            </li>
            <li>
              <div class="flex flex-col">
                <span>
                  Introduction to Computer Organization
                </span>
                <span class="font-normal">
                  MIPS & AVR architecture and emulated devices (LCD, buttons, keypad).
                </span>
              </div>
            </li>
            <li>
              <div class="flex flex-col">
                <span>
                  Web Design and Programming
                </span>
                <span class="font-normal">
                  Django (with test-driven development), JQuery, Bootstrap, GitLab CI, and Heroku.
                </span>
              </div>
            </li>
            <li>
              <div class="flex flex-col">
                <span>
                  Programming Foundations II
                </span>
                <span class="font-normal">
                OOP with Java, GUI with JavaFX, basic web programming with Spring Boot.
                </span>
                <div class="flex flex-col font-normal">
                  <span>Additional work as a coordinator:</span>
                  <ul class="list-disc ml-8">
                    <li>
                      Worked with two other coordinators to manage a team of
                      28 teaching assistants.
                    </li>
                    <li>
                      Reviewed and created grading schemes for weekly lab assignments
                      given out to 400+ students.
                    </li>
                    <li>
                      Built an automatic submission checking system using
                      JUnit, Gradle, and GitLab CI.
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="block md:hidden w-full">
        <div class="border-b border-solid border mx-auto my-16"></div>
      </div>
    </div>

    <div class="flex flex-col md:flex-row-reverse text-gray-700">
      <div class="flex flex-col items-center mb-8 md:mb-0 md:w-1/4">
        <div class="mb-4 md:mb-2">
          <img
            alt="Faculty of Computer Science, Universitas Indonesia"
            src="../assets/img/csui_horizontal_transparent_english.png"
            class="w-1/2 ph:w-3/4 md:w-3/4 lg:w-1/2 mx-auto">
        </div>
        <div class="flex items-center">
          <span>Jan 2020</span>
        </div>
        <div class="hidden md:flex w-1/4 h-full">
          <div class="border-l border-solid border-4 mx-auto my-2"></div>
        </div>
      </div>
      <div class="flex flex-col items-start md:w-3/4 md:mr-8 md:mb-8">
        <div class="flex flex-col">
          <div class="flex flex-col text-xl ph:text-lg">
            <span>
              <span class="font-semibold">Web Developer</span>
            </span>
            <span>Faculty of Computer Science, Universitas Indonesia</span>
          </div>
        </div>
        <div class="flex flex-col mt-4">
          <span>
            Improved and added new features to a room reservation system.
          </span>
          <ul class="list-disc ml-6 p-2">
            <li>
              Upgraded the stack from Django 1.9.5 and Python 2.7 to
              Django 3.0.2 and Python 3.8.
            </li>
            <li>
              Optimized some of the database queries, resulting in more than 10x
              performance increase to certain pages.
            </li>
            <li>
              Fixed multiple bugs and security vulnerabilities found in the system.
            </li>
            <li>
              Added new features to enhance the user experience.
            </li>
          </ul>
        </div>
      </div>
      <div class="block md:hidden w-full">
        <div class="border-b border-solid border mx-auto my-16"></div>
      </div>
    </div>

    <div class="flex flex-col md:flex-row-reverse text-gray-700">
      <div class="flex flex-col items-center mb-8 md:mb-0 md:w-1/4">
        <div class="mb-4 md:mb-0">
          <img
            alt="Google Summer of Code"
            src="../assets/img/gsoc.png"
            class="w-1/2 ph:w-3/4 md:w-3/4 lg:w-1/2 mx-auto">
        </div>
        <div class="flex items-center">
          <span>May 2019</span><span class="mx-1">-</span><span>Aug 2019</span>
        </div>
        <div class="hidden md:flex w-1/4 h-full">
          <div class="border-l border-solid border-4 mx-auto my-2"></div>
        </div>
      </div>
      <div class="flex flex-col items-start md:w-3/4 md:mr-8 md:mb-8">
        <div class="flex flex-col">
          <div class="flex flex-col text-xl ph:text-lg">
            <span>
              <span class="font-semibold">Student</span> with
              <span class="font-semibold">Django Software Foundation</span>
            </span>
            <span>Google Summer of Code 2019</span>
          </div>
        </div>
        <div class="flex flex-col mt-4">
          <span>
            Participated in the annual open source software development program
            held by Google.
          </span>
          <ul class="list-disc ml-6 p-2">
            <li>
              Added a new
              <a
                class="link"
                :href="
                'https://docs.djangoproject.com/en/dev/ref/models/fields/' +
                '#django.db.models.JSONField'">
                JSONField
              </a>
              that can be used for all database backends supported by Django
              (PostgreSQL, MySQL, MariaDB, SQLite, and Oracle Database).
            </li>
            <li>
                Identified and provided an initial patch for
                <a
                  class="link"
                  :href="
                  'https://www.djangoproject.com/weblog/2019/aug/01/security-releases/' +
                  '#s-cve-2019-14234-sql-injection-possibility-in-key-and-index-lookups-' +
                  'for-jsonfield-hstorefield'">
                  a security vulnerability
                </a>
                in Django.
            </li>
          </ul>
        </div>
      </div>
      <div class="block md:hidden w-full">
        <div class="border-b border-solid border mx-auto my-16"></div>
      </div>
    </div>

    <div class="flex flex-col md:flex-row-reverse text-gray-700">
      <div class="flex flex-col items-center mb-8 md:mb-0 md:w-1/4">
        <div class="mb-4 md:mb-2">
          <img
            alt="Wikimedia Indonesia"
            src="../assets/img/wikimedia_id.png"
            class="w-1/2 ph:w-3/4 md:w-3/4 lg:w-1/2 mx-auto px-4 py-1">
        </div>
        <div class="flex items-center">
          <span>July 2018</span>
        </div>
      </div>
      <div class="flex flex-col items-start md:w-3/4 md:mr-8">
        <div class="flex flex-col">
          <div class="flex flex-col text-xl ph:text-lg">
            <span>
              <span class="font-semibold">Technical Staff Intern</span>
            </span>
            <span>Wikimedia Indonesia</span>
          </div>
        </div>
        <div class="flex flex-col mt-4">
          <span>
            Set up a local server to host applications internally
            and instructed the employees on how to use them.
          </span>
          <ul class="list-disc ml-6 p-2">
            <li>
              Deployed a financial software used by the accountants.
            </li>
            <li>
              Localized and deployed a NodeJS application to manage employees'
              annual leave.
            </li>
          </ul>
        </div>
      </div>
    </div>

  </BaseCard>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'WorkExperiences',
  components: {},
});
</script>

<style scoped>
.link {
  @apply font-semibold text-blue-700;
}
</style>
