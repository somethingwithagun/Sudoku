from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Visitor
from .serializer import VisitorSerializer

@api_view(['GET'])
def get_visitors(request):
    visitors = Visitor.objects.all()
    serializer = VisitorSerializer(visitors, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def create_visitor(request):
    serializer = VisitorSerializer(data=request.data)
    if(serializer.is_valid()):
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)