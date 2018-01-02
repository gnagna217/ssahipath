#!/usr/bin/perl

#Use our form library
require "cgi-lib.pl";

#Get the data from the form
&ReadParse;

#Now lets open a pipe to the mail program and print our email message
open(MAIL,"|mail gnagna217\@gmail.com");		#put email address here

#now we put MAIL after print to print to the pipe
print MAIL <<"EOT";
Hello,

This is a simple email response from a form.

Here is the information that was sent:

Name:		$in{"fname"}
Address:	$in{"lname"}
Email:		$in{"email"}

Thank you
EOT

close(MAIL);

print <<"EOT";
Content-type: text/html

<HTML><BODY>
<H1>Thank you $in{"fname"}.</H1>
<H2>The form's information was successfully sent via email</H2>
</BODY></HTML>
EOT