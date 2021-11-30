---
layout: main
title: Cole Wilson
---
Hello! I'm a high school programmer with a passion for back-end web development, systems administration, offensive cybersecurity, python, and lots more.

<details open>
	<summary>projects</summary>
	<ul>
		{% for project in site.projects %}<li>[<a href="{{project.url}}">{{project.name}}</a>] {{project.desc}}</li>{% endfor %}
	</ul>
</details>

<details open>
	<summary>blog posts</summary>
	<ul>
		{% for post in site.posts %}<li>[<a href="{{post.link}}">{{ post.date | date: "%d.%m.%y" }}</a>]{{post.title}}</li>{% endfor %}
	</ul>
</details>
