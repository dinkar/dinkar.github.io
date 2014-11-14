---
layout: post
title: Automount media in Linux
---

The [/etc/fstab (File system table)](http://en.wikipedia.org/wiki/Fstab) keeps a record of the medias that are mounted in Linux. A usual record in fstab looks like 
{% highlight bash %}
#device-spec		  mount-point		    fs-type	   options    dump   pass
UUID=a888518e-8f3c-4bcd   /media/<partition-name>   ext3           defaults   1      0
{% endhighlight %}

To make an entry for a specific partition we need to find its UUID, which can be found using the command **sudo blkid**. It displays the information about a device like
{% highlight bash %}
/dev/sda2: LABEL="RECOVERY" UUID="66D6E797D6E76631" TYPE="ntfs" PARTUUID="885a1176-02"
{% endhighlight %}

Another vital information that is required is our group ID and user ID, since we want the partitions to be automounted only for us and not for other users. This can be found by doing a simple grep in **/etc/passwd**. In my case it showed the following
{% highlight bash %}
[dinkar@localhost dinkar]$grep dinkar /etc/passwd
dinkar:x:1000:1000:dinkar pundir:/home/dinkar:/bin/bash
{% endhighlight %}

The first 1000 is my user ID and subsequent one is the group ID. With this information we make the following entry in /etc/fstab
{% highlight bash %}
UUID=a888518e-8f3c-4bcd   /media/c   ntfs   defaults,uid=1000,gid=1000,rw 0 0
{% endhighlight %}

And that would be it.

