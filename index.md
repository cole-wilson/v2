---
layout: main
title: Cole Wilson
---
Hello! I'm a high school programmer with a passion for back-end web development, systems administration, offensive cybersecurity, python, and lots more. I'm a proud member
of [hack club](//hackclub.com), and run a coding club at my school. I am also really interested in competitive robotics, and participate in FIRST robotics.

I've made several open-source projects (which you can find below!). I also do a lot of security research / bug finding, and have made several responsible disclosures over
the last couple years.

You can find my github at [cole-wilson](//github.com/cole-wilson), and I'm on twitter at [\_\_colewilson\_\_](//twitter.com/__colewilson__). If you would like to email me,
please decode this hex-encoded string: '68 65 79 40 63 6f 6c 65 2e 77 73'. I'm always happy to talk about projects!

<!-- Finally, there are several hidden "easter eggs" on this website and its various associated subdomains. Try and find them! -->

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
